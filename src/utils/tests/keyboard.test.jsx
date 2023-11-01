import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Keyboard from "../../components/keyboard/keyboard";

describe("Keyboard component", () => {
  it("render 28 keys", () => {
    render(
      <Keyboard
        onLetterPress={() => ({})}
        onEnterPress={() => ({})}
        onBackspacePress={() => ({})}
        statuses={{}}
      />
    );
    expect(screen.getAllByRole("button")).toHaveLength(28);
  });
  it("call onLetterPress when btn pressed", async () => {

    const onLetterPress = vi.fn()

    render(
      <Keyboard
        onLetterPress={onLetterPress}
        onEnterPress={() => ({})}
        onBackspacePress={() => ({})}
        statuses={{}}
      />
    );

    const button = screen.getByRole("button", { name: "a" });

    fireEvent.click(button);
    expect(onLetterPress).toHaveBeenCalledTimes(1);
    expect(onLetterPress).toHaveBeenCalledWith("a");
    
  });

  it('call onBackspacePress on click on it', () => {
    const onBackspacePress = vi.fn()

    render(
      <Keyboard
        onLetterPress={() => {}}
        onEnterPress={() => {}}
        onBackspacePress={onBackspacePress}
        statuses={{}}
      />
    );
    
    const button = screen.getByRole('button', {name: 'backspace'})

    fireEvent.click(button);
    expect(onBackspacePress).toHaveBeenCalledTimes(1);
  })

  it('call onEnterPress on click on it', () => {
    const onEnterPress = vi.fn()

    render(
      <Keyboard
        onLetterPress={() => {}}
        onEnterPress={onEnterPress}
        onBackspacePress={() => {}}
        statuses={{}}
      />
    );
    
    const button = screen.getByRole('button', {name: 'enter'})
    
    fireEvent.click(button);
    expect(onEnterPress).toHaveBeenCalledTimes(1);
  })

  it('letter painting', () => {
    render(
      <Keyboard
        onLetterPress={() => {}}
        onEnterPress={() => {}}
        onBackspacePress={() => {}}
        statuses={{a: 'right', b: 'wrong place', c: 'wrong'}}
      />
    )

    const a = screen.getByRole('button', {name: 'a'})
    const b = screen.getByRole('button', {name: 'b'})
    const c = screen.getByRole('button', {name: 'c'})
    const otherLetters = screen.getAllByText(/^[d-z]$/)

    expect(a).toHaveStyle("background-color: rgb(0, 128, 0)")
    expect(b).toHaveStyle("background-color: rgb(255, 255, 0)")
    expect(c).toHaveStyle("background-color: rgb(128, 128, 128)")
    
    otherLetters.forEach(elem => {
      expect(elem).toHaveStyle("background-color: rgba(0, 0, 0, 0)")
    })

  })
});

// тесты на он энтер и он бэкспейс
// тесты на то, что буквы раскрашиваются (проверить кол-во разных backgroundColor)