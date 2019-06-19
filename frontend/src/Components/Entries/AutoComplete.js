import React, { Component } from 'react';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';



function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        ...InputProps,
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestionProps) {
  const { suggestion, index, itemProps, highlightedIndex } = suggestionProps;
  const isHighlighted = highlightedIndex === index;


  return (
    <MenuItem
      {...itemProps}
      key={suggestion.id}
      selected={isHighlighted}
      component="div"
    // onClick={() =>{ _selected(suggestion)}}
    >
      {suggestion.label}
    </MenuItem>
  );
}


function getSuggestions(suggestions, value, { showEmpty = true } = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;


  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {

      return suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;
    }).splice(0, 5);
}


const useStyles = {
  root: {
    flexGrow: 1,
    height: 250,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,

    left: 0,
    right: 0,
  },
  chip: {

  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,
  },
  divider: {

  },
};


class AutoComplete extends Component {

  handle_selected = (e) => {
    this.props._selected_item(e);
  }


  render() {
    const classes = useStyles;
    const { suggestions } = this.props;
    return (
      <div>
        <Downshift id="downshift-simple"
           itemToString={item => (item ? item.label : '')}
          onChange={selection => {
            
            this.handle_selected(selection);

          }}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            highlightedIndex,
            inputValue,
            isOpen,
            selectedItem,
          }) => {
            const { onBlur, onFocus, ...inputProps } = getInputProps({
              placeholder: 'Seleccione un producto registrado en el sistema',
            });

            return (
              <div className={classes.container}>
                {renderInput({
                  fullWidth: true,
                  classes,
                  label: 'Producto',
                  InputLabelProps: getLabelProps({ shrink: true }),
                  InputProps: { onBlur, onFocus },
                  inputProps,
                })}

                <div {...getMenuProps()}>
                  {isOpen ? (
                    <Paper className="autocomplete-paper" square>
                      {getSuggestions(suggestions, inputValue).map((suggestion, index) =>
                        renderSuggestion({
                          suggestion,
                          index,
                          itemProps: getItemProps({item:suggestion,index:index}),
                          highlightedIndex,
                          selectedItem

                        }),
                      )}
                    </Paper>
                  ) : null}
                </div>
              </div>
            );
          }}
        </Downshift>

      </div>
    )

  }
}

export default AutoComplete;
