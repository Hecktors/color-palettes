import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';
import Palette from './Palette';
import NewPaletteForm from './NewPaletteForm';
import PaletteList from './PaletteList';
import ShadesPalette from './ShadesPalette';

function App() {
  // if saved Palettes get that Palettes, if not, from seedColors file 
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'))
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  const findPalette = (id) => palettes.find((color) => color.id === id);

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
    window.localStorage.removeItem('emoji-mart.last')
    window.localStorage.removeItem('emoji-mart.frequently')
  };

  useEffect(() => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes))
  }, [palettes])

  console.log(palettes);

  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/palette'
          render={(routeProps) => (
            <PaletteList palettes={palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/new'
          render={(routeProps) => (
            <NewPaletteForm
              {...routeProps}
              savePalette={savePalette}
              palettes={palettes}
            />
          )}
        />
        <Route
          exact
          path={'/palette/:paletteId'}
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={(routeProps) => (
            <ShadesPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route render={() => <Redirect to='/palette' />} />
      </Switch>
    </div>
  );
}

export default App;
