import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import {Board} from "../../components/board/board";
// https://stackoverflow.com/questions/67636326/how-to-mock-react-components-with-react-testing-library

// https://vitest.dev/guide/migration.html#module-mocks

vi.mock('../../components/row/emptyRow', () => {
  return {
    EmptyRow: () => <div>EmptyRow</div>
  }
})

vi.mock('../../components/row/currentRow', () => {
  return {
    CurrentRow: () => <div>CurrentRow</div>
  }
})

vi.mock('../../components/row/fullFilledRow', () => {
  return {
    FullFilledRow: () => <div>FullFilledRow</div>
  }
})

describe('Board component', () => {
  it("guesses empty", () => {
    render(
      <Board 
        secretWord={'peace'}
        currentWord={'award'}
        guesses={[]}
      />
    )
    const EmptyRow = screen.getAllByText('EmptyRow')
    const currentRow = screen.getAllByText('CurrentRow')
    expect(EmptyRow).toHaveLength(5)
    expect(currentRow).toHaveLength(1)
  })

  it("guesses with 2 guess", () => {
    render(
      <Board 
        secretWord={'peace'}
        currentWord={'award'}
        guesses={['qwert', 'hello']}
      />
    )

    const EmptyRow = screen.getAllByText('EmptyRow')
    const CurrentRow = screen.getAllByText('CurrentRow')
    const FullFilledRow = screen.getAllByText('FullFilledRow')

    expect(EmptyRow).toHaveLength(3)
    expect(CurrentRow).toHaveLength(1)
    expect(FullFilledRow).toHaveLength(2)
  })

  it("guesses with 6 guess", () => {
    render(
      <Board 
        secretWord={'peace'}
        currentWord={'award'}
        guesses={['dfgsa', 'asdgh', 'asdgh', 'zxcnn', 'psfgh', 'zxcbn']}
      />
    )

    const FullFilledRow = screen.getAllByText('FullFilledRow')

    expect(FullFilledRow).toHaveLength(6)
  })

  it("when win", () => {
    render(
      <Board
        secretWord={'peace'}
        currentWord={''}
        guesses={['asdfg', 'peace']}
      />
    )

    const EmptyRow = screen.queryAllByText('EmptyRow')
    const CurrentRow = screen.queryAllByText('CurrentRow')
    const FullFilledRow = screen.queryAllByText('FullFilledRow')

    expect(EmptyRow).toHaveLength(4)
    expect(CurrentRow).toHaveLength(0)
    expect(FullFilledRow).toHaveLength(2)
  })
})