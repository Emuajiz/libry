import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  formControl: {
    display: 'flex',
    flexBasis: '100%',
    alignItems: 'stretch',
    margin: theme.spacing.unit * 3 / 2
  },
  formGroup: {
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexWrap: 'nowrap'
  },
  radioFlex: {
    flex: '1 1 auto',
    margin: '0 5px'
  },
  greenButtonRoot: {
    backgroundColor: '#00000004',
    borderRadius: 5,
    border: '1px solid',
    color: green.A700,
    fontFamily: 'monospace',
    fontSize: '180%',
    height: 32,
    '&$checked': {
      backgroundColor: green.A700,
      color: 'white'
    },
    '&:not($checked):hover': {
      backgroundColor: green['50']
    },
    transition: 'background-color 250ms'
  },
  yellowButtonRoot: {
    backgroundColor: '#00000004',
    borderRadius: 5,
    border: '1px solid',
    color: yellow['700'],
    fontFamily: 'monospace',
    fontSize: '200%',
    height: 32,
    '&$checked': {
      backgroundColor: yellow.A700,
      color: 'white'
    },
    '&:not($checked):hover': {
      backgroundColor: yellow['100']
    },
    transition: 'background-color 250ms'
  },
  redButtonRoot: {
    backgroundColor: '#00000004',
    borderRadius: 5,
    border: '1px solid',
    color: red.A700,
    fontFamily: 'monospace',
    fontSize: '160%',
    height: 32,
    '&$checked': {
      backgroundColor: red.A700,
      color: 'white'
    },
    '&:not($checked):hover': {
      backgroundColor: red['50']
    },
    transition: 'background-color 250ms'
  },
  greyButtonRoot: {
    backgroundColor: '#00000004',
    borderRadius: 5,
    border: '1px solid',
    color: grey['700'],
    fontFamily: 'monospace',
    fontSize: '180%',
    height: 32,
    '&$checked': {
      backgroundColor: grey['700'],
      color: 'white'
    },
    '&:not($checked):hover': {
      backgroundColor: grey['200']
    },
    transition: 'background-color 250ms'
  },
  disabled: {
    backgroundColor: '#00000004'
  },
  checked: {}
});

function QRadios(props) {
  const {
    classes,
    error,
    required,
    id,
    label,
    name,
    binaryChoice,
    value,
    onChange,
    onBlur
  } = props;

  return (
    <FormControl className={classes.formControl} required={required}>
      <InputLabel
        error={error}
        required={required}
        shrink
        style={{
          position: 'relative',
          marginBottom: '10px'
        }}
      >
        {label}
      </InputLabel>
      <RadioGroup
        className={classes.formGroup}
        row

        id={id}
        name={name}

        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <Radio
          htmlFor={id}
          className={classes.radioFlex}

          value="good"
          classes={{
            root: classes.greenButtonRoot,
            checked: classes.checked
          }}
          icon="〇"
          checkedIcon="〇"
        />
        <Radio
          htmlFor={id}
          className={classes.radioFlex}

          value="okay"
          classes={{
            root: classes.yellowButtonRoot,
            checked: classes.checked,
            disabled: classes.disabled
          }}
          icon="△"
          checkedIcon="△"
          disabled={binaryChoice}
        />
        <Radio
          htmlFor={id}
          className={classes.radioFlex}

          value="bad"
          classes={{
            root: classes.redButtonRoot,
            checked: classes.checked
          }}
          icon="✕"
          checkedIcon="✕"
        />
        <Radio
          htmlFor={id}
          className={classes.radioFlex}

          value="na"
          classes={{
            root: classes.greyButtonRoot,
            checked: classes.checked
          }}
          icon="－"
          checkedIcon="－"
        />
      </RadioGroup>
    </FormControl>
  );
}

QRadios.propTypes = {
  classes: PropTypes.object.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  binaryChoice: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func
};

QRadios.defaultProps = {
  required: false,
  binaryChoice: false,
  error: false,
  onBlur: null,
  value: ''
};

export default withStyles(styles)(QRadios);