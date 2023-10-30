import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Keyboard from "../../components/keyboard/keyboard";

describe("Keyboard component", () => {
  it("render 26 keys", () => {
    render(
      <Keyboard
        onLetterPress={() => ({})}
        onEnterPress={() => ({})}
        onBackspacePress={() => ({})}
        statuses={{}}
      />
    );
    expect(screen.getAllByRole("button")).toHaveLength(26);
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
});

// тесты на он энтер и он бэкспейс
// тесты на то, что буквы раскрашиваются (проверить кол-во разных backgroundColor)