import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import seedColors from '../seedColors';
import { generatePalette } from '../colorHelpers';
import Page from './Page';
import Palette from './Palette';
import NewPaletteForm from './NewPaletteForm';
import PaletteList from './PaletteList';
import ShadesPalette from './ShadesPalette';

function App({ history }) {

  // if saved Palettes get that Palettes, if not, from seedColors file 
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'))
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  useEffect(() => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes))
    console.log("App.js useEffect")
  }, [palettes])


  const findPalette = (id) => palettes.find((color) => color.id === id);

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
    window.localStorage.removeItem('emoji-mart.last')
    window.localStorage.removeItem('emoji-mart.frequently')
  };

  const deletePalette = (id, history) => {
    const updatedPalettes = palettes.filter(palette => palette.id !== id)
    setPalettes(updatedPalettes);
    history.push('/')
  }

  console.log("Rendering App")

  return (
    <div className='App'>
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='page' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path='/palette'
                render={(routeProps) => (
                  <Page>
                    <PaletteList palettes={palettes} deletePalette={deletePalette} {...routeProps} />
                  </Page>
                )}
              />
              <Route
                exact
                path='/palette/new'
                render={(routeProps) => (
                  <Page>
                    <NewPaletteForm
                      {...routeProps}
                      savePalette={savePalette}
                      palettes={palettes}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path={'/palette/:paletteId'}
                render={(routeProps) => (
                  <Page>
                    <Palette
                      palette={generatePalette(
                        findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path='/palette/:paletteId/:colorId'
                render={(routeProps) => (
                  <Page>
                    <ShadesPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
                    />
                  </Page>
                )}
              />
              <Route
                render={() => (
                  <Page>
                    <Redirect to='/palette' />
                  </Page>
                )} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
