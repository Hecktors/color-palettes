import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Header from './Header';
import Footer from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ShadesPaletteStyles';

class ShadesPalette extends Component {
  _shades = this.gatherShades(this.props.palette, this.props.colorId);
  state = {
    format: 'hex',
  };

  gatherShades(palette, colorId) {
    let shades = [];
    for (let key in palette.colors) {
      shades.push(
        ...palette.colors[key].filter((color) => color.id === colorId)
      );
    }
    return shades.slice(1);
  }

  changeFormat = (format) => {
    this.setState({ format });
  };

  render() {
    const {
      palette: { paletteName, emoji, id },
      classes,
    } = this.props;
    const colorBoxes = this._shades.map((shade) => (
      <ColorBox
        key={shade.name}
        name={shade.name}
        color={shade[this.state.format]}
        showLink={false}
      />
    ));

    return (
      <div className={classes.Palette}>
        <Header
          changeFormat={this.changeFormat}
          format={this.state.format}
          showSlider={false}
        />
        <div className={classes.ShadesPalette}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`} className={classes.backButton}>
              Go Back
            </Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(ShadesPalette);
