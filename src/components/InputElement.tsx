import React, { useRef } from "react";

interface IInputElementProps {
  handler: (value: string) => void;
}
export function InputElement(props: IInputElementProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <input ref={inputRef}></input>
      <button
        onClick={() => {
          const value = inputRef?.current?.value || "";
          props.handler(value);

          const input = inputRef.current as HTMLInputElement;
          input.value = "";
        }}
      >
        Add
      </button>
    </>
  );
}
