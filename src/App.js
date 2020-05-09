import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';
import PaletteList from './PaletteList';

function App() {
  const findPalette = (id) => seedColors.find((color) => color.id === id);
  console.log(generatePalette(seedColors[4]));

  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/palette'
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path={`/palette/:id`}
          render={(routeProps) => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route render={() => <Redirect to='/palette' />} />
      </Switch>
    </div>
  );
}

export default App;
