import React from 'react';
import { TextInput } from 'react-native-paper';

const FormInput = ({
  mode,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  placeholder,
  style,
  ...rest
}: any) => {
  return (
    <TextInput
      {...rest}
      placeholder={placeholder}
      mode={mode}
      style={style}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onChangeText={item => onChangeText(item)}
    />
  );
};
export default FormInput;
