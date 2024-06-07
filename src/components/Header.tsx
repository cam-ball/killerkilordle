import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  margin-right: 20px;
  flex: 1 0 45%;
`;

const Stats = styled.div`
  font-size: 14px;
  flex: 1 0 45%;
`;

const Options = styled.div`
  margin-top: 10px;
  flex: 1 0 100%;
  display: flex;
  justify-content: space-between;
`;

function Header({
  remaining,
  guesses,
  limit,
  totalWords,
  handleTotalChange,
  expandedList,
  handleListChange,
}: {
  remaining: number;
  guesses: number;
  limit: number;
  totalWords: number;
  handleTotalChange: (newTotal: number) => void;
  handleListChange: (expandedList: boolean) => void;
  expandedList: boolean;
}) {
  return (
    <Container>
      <Title>
        Kilordle originally by{' '}
        <a
          href="https://github.com/jonesnxt/kilordle"
          rel="noreferrer"
          target="_blank"
        >
          jones
        </a>
      </Title>
      <Stats>
        Guesses: {guesses}/{limit} | Remaining: {remaining}/{totalWords}
      </Stats>
      <Options>
        <label>
          <input
            defaultChecked={expandedList}
            id="expandList"
            name="expandList"
            onChange={(event) => handleListChange(event.target.checked)}
            type="checkbox"
          />
          use expanded word list?
        </label>
        <input
          id="totalWordCount"
          name="totalWords"
          onChange={(event) => handleTotalChange(Number(event.target.value))}
          type="number"
          value={totalWords}
        />
      </Options>
    </Container>
  );
}

export default Header;
