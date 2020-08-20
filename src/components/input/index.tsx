import React, { useRef, useEffect } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
      setValue(ref: any, value: string) {
        inputElementRef.current.setNativeProps({ text: value });
        inputValueRef.current.value = value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={22} color="#bbb" />

      <TextInput
        // ref={inputValueRef}
        placeholderTextColor="#bbb"
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};

export default Input;
