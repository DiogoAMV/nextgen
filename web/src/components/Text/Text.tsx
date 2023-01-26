import styled from "styled-components";

export const Text = styled.p`
  font-size: var(--default);
  color: var(--black);

  &.desktop-regular {
    font-size: var(--desktop---text--regular);
    font-weight: 400;
  }

  &.desktop-small {
    font-size: var(--desktop---text--small);
    font-weight: 400;
  }

  &.desktop-bold {
    font-size: var(--desktop---text--bold);
    font-weight: 600;
  }

  &.desktop-strike {
    font-size: var(--desktop---text--strike);
    font-weight: 400;
  }

  &.desktop-underline {
    font-size: var(--desktop---text--underline);
    font-weight: 400;
  }

  &.desktop-small-bold {
    font-size: var(--desktop---text--small--bold);
    font-weight: 600;
  }

  &.mobile-regular {
    font-size: var(--mobile---text--regular);
    font-weight: 400;
  }

  &.mobile-small {
    font-size: var(--mobile---text--small);
    font-weight: 400;
  }

  &.mobile-bold {
    font-size: var(--mobile---text--bold);
    font-weight: 600;
  }

  &.mobile-strike {
    font-size: var(--mobile---text--strike);
    font-weight: 400;
  }

  &.mobile-underline {
    font-size: var(--mobile---text--underline);
    font-weight: 400;
  }

  &.mobile-small-bold {
    font-size: var(--mobile---text--small--bold);
    font-weight: 600;
  }
`;

export const H1 = styled.h1`
  font-size: var(--default);
  color: var(--black);

  &.desktop {
    font-size: var(--desktop---h1);
  }

  &.mobile {
    font-size: var(--mobile---h1);
  }
`;

export const H2 = styled.h2`
  font-size: var(--default);
  color: var(--black);

  &.desktop {
    font-size: var(--desktop---h2);
  }

  &.mobile {
    font-size: var(--mobile---h2);
  }
`;

export const H3 = styled.h3`
  font-size: var(--default);
  color: var(--black);

  &.desktop {
    font-size: var(--desktop---h3);
  }

  &.mobile {
    font-size: var(--mobile---h3);
  }
`;
