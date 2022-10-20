import { ChangeEvent, MouseEvent, useState } from "react";
import styled from "styled-components";

export const AutoComplete = ({ suggestions }: { suggestions: string[] }) => {
  const [suggest, setSuggest] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const onChanges = (event: ChangeEvent<HTMLInputElement>): void => {
    const userInput = event.target.value.toLowerCase();
    // filter
    const filteredSuggestions = suggestions.filter((suggestions) =>
      suggestions.toLowerCase().includes(userInput)
    );
    // set suggestions
    setSuggest(filteredSuggestions);
    setUserInput(userInput);
  };
  const onClick = (event: MouseEvent<HTMLLIElement>): void => {
    const input = event.target as HTMLLIElement;
    setUserInput(input.outerText);
    setSuggest([]);
  };
  return (
    <Container>
      <input type="text" onChange={(e) => onChanges(e)} value={userInput} />
      <ul className="suggestions">
        {/* Insert Suggestions */}
        {suggest
          ? suggest.map((element: string, index: number) => (
              <li
                className="suggestion-active"
                key={index}
                onClick={(e) => onClick(e)}
              >
                {element}
              </li>
            ))
          : null}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  margin: 50%;
  input {
    border: 1px solid #999;
    padding: 0.5rem;
    width: 300px;
  }

  .suggestions {
    border: 1px solid #999;
    border-top-width: 0;
    list-style: none;
    margin-top: 0;
    max-height: 143px;
    overflow-y: auto;
    padding-left: 0;
    width: calc(300px + 1rem);
  }

  .suggestions li {
    padding: 0.5rem;
  }

  .suggestion-active,
  .suggestions li:hover {
    background-color: #008f68;
    color: #fae042;
    cursor: pointer;
    font-weight: 700;
  }

  .suggestions li:not(:last-of-type) {
    border-bottom: 1px solid #999;
  }
`;
