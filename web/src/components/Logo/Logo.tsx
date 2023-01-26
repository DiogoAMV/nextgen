import styled from "styled-components";

export default function Logo() {
  return (
    <Text>
      Next<Span>Gen</Span>
    </Text>
  );
}

const Text = styled.p`
  font-weight: 700;
  font-size: var(--logo-size);
  color: var(--ruby--500);
`;

const Span = styled.span`
  font-weight: 400;
  color: var(--black);

  &.dark {
    color: var(--white);
  }
`;
