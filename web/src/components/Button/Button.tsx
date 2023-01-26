import styled from "styled-components";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return <CustomButton className={className}>{children}</CustomButton>;
}

const CustomButton = styled.button`
  background-color: var(--black);
  color: var(--white);
  font-size: var(--default);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  gap: 8px;

  font-weight: 600;
  height: 48px;
  line-height: 24px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 12px;
  position: relative;
  text-decoration: none;
  transition: all 0.2s;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    background-color: var(--black--alpha--800);
  }

  &.small {
    padding: 4px;
    height: 32px;
  }

  &.disabled {
    background-color: var(--black--alpha--400);
    cursor: default;
  }

  &.small-disabled {
    padding: 4px;
    height: 32px;
    background-color: var(--black--alpha--400);
    cursor: default;
  }

  &.white {
    background-color: var(--black--alpha--100);
    color: var(--black);

    &:hover {
      color: var(--black--alpha--600);
    }
  }

  &.small-white {
    padding: 4px;
    height: 32px;
    background-color: var(--black--alpha--100);
    color: var(--black);

    &:hover {
      color: var(--black--alpha--600);
    }
  }

  &.default {
    background-color: var(--ruby--alpha--400);
    color: var(--ruby--400);

    &:hover {
      color: var(--ruby--600);
    }
  }

  &.small-default {
    padding: 4px;
    height: 32px;
    background-color: var(--ruby--alpha--400);
    color: var(--ruby--400);

    &:hover {
      color: var(--ruby--600);
    }
  }
`;
