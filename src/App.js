import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';
import Palette from './Palette';
import NewPaletteForm from './NewPaletteForm';
import PaletteList from './PaletteList';
import ShadesPalette from './ShadesPalette';

function App() {
  const [palettes, setPalettes] = useState(seedColors);
  // const [colors, setColors] = useState([]);
  const findPalette = (id) => palettes.find((color) => color.id === id);

  const savePalette = (newPalette) => {
    // setColors(colors);
    setPalettes([...palettes, newPalette]);
  };
  console.log(palettes);

  // console.log(generatePalette(seedColors[4]));

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
