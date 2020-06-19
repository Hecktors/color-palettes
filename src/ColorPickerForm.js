import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function ColorPickerForm(props) {
  const { colors, paletteIsFull, addNewColor } = props
  const [newColor, setNewColor] = useState({ color: 'teal', name: '' });

  ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
    colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
  );
  ValidatorForm.addValidationRule('isColorUnique', (value) =>
    colors.every(({ color }) => color !== newColor.color)
  );

  const handleSubmit = () => {
    addNewColor(newColor)
    setNewColor({ ...newColor, name: '' })
  }
  return (
    <div className="ColorPickerForm">
      <ChromePicker
        color={newColor.color}
        onChangeComplete={(c) => setNewColor({ ...newColor, color: c.hex })}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          value={newColor.name}
          onFocus={(e => e.target.select())}
          onChange={(e) => setNewColor({ ...newColor, name: e.target.value })}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'This field is required',
            'Color name must be unique',
            'Color already used',
          ]}
        />
        <Button
          disabled={paletteIsFull}
          type='submit'
          variant='contained'
          color='primary'
          style={{ backgroundColor: paletteIsFull ? 'grey' : newColor.color }}
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  )
}

export default ColorPickerForm
