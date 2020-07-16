import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { generatePalette } from '../colorHelpers';
import seedColors from '../seedColors';
import Palette from './Palette';
import NewPaletteForm from './NewPaletteForm';
import PaletteList from './PaletteList';
import ShadesPalette from './ShadesPalette';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App({ history }) {

  // if saved Palettes get that Palettes, if not, from seedColors file 
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'))
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  useEffect(() => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes))
  }, [palettes])


  const findPalette = (id) => palettes.find((color) => color.id === id);

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
    window.localStorage.removeItem('emoji-mart.last')
    window.localStorage.removeItem('emoji-mart.frequently')
  };

  const deletePalette = (id) => {
    const updatedPalettes = palettes.filter(palette => palette.id !== id)
    setPalettes(updatedPalettes);
    history.push('/')
  }

  return (
    <div className='App'>
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path='/palette'
                render={(routeProps) => (
                  <div className='page'>
                    <PaletteList palettes={palettes} deletePalette={deletePalette} {...routeProps} />
                  </div>
                )}
              />
              <Route
                exact
                path='/palette/new'
                render={(routeProps) => (
                  <div className='page'>
                    <NewPaletteForm
                      {...routeProps}
                      savePalette={savePalette}
                      palettes={palettes}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path={'/palette/:paletteId'}
                render={(routeProps) => (
                  <div className='page'>
                    <Palette
                      palette={generatePalette(
                        findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path='/palette/:paletteId/:colorId'
                render={(routeProps) => (
                  <div className='page'>
                    <ShadesPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </div>
                )}
              />
              <Route render={() => (
                <div className='page'>
                  <Redirect to='/palette' />
                </div>
              )} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
