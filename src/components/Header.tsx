import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  margin-right: 20px;
`;

const Stats = styled.div`
  font-size: 14px;
`;

function Header({
  remaining,
  guesses,
  limit,
  totalWords,
  handleTotalChange,
}: {
  remaining: number;
  guesses: number;
  limit: number;
  totalWords: number;
  handleTotalChange: (newTotal: number) => void;
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
      <input
        id="totalWordCount"
        name="totalWords"
        onChange={(event) => handleTotalChange(Number(event.target.value))}
        type="number"
      />
    </Container>
  );
}

export default Header;
