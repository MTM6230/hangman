/**
 * Hangman
 */

/**
 * Create a list of phrases. Each phrase should have a related category.
 */

/**
 * Create a container to hold the current game status
 * - An active game indicator
 * - The current phrase and category
 * - A list of guessed letters
 * - The number of strikes
 * - The maximum number of allowed strikes
 */

/**
 * Create and display a list of instructions to explain how to play the game and which commands can be used.
 */

/**
 * Create a start command to start a new game
 * - Check if there is a current game
 *    - If no:
 *      - Set game to active
 *      - Select a current phrase
 *      - Reset the number of strikes
 *      - Reset the list of guessed letters
 *      - Convert phrase to a puzzle
 *      - Display the puzzle with the current category
 *    - If yes:
 *      - Convert current phrase to a puzzle
 *      - Display the puzzle
 */

/**
 * Convert phrase to puzzle
 * - convert each letter to underscore
 *    - Convert all letters to uppercase
 *    - But leave spaces as spaces
 *    - Use list of guessed letters to determine which letters not to convert
 * - Check if puzzle is complete (no underscores)
 *    - Display game won message
 */

/**
 * Create guess command
 * - Check if guessed letter is valid and display message
 * - Check if guessed letter has already guessed and display message
 * - Check if guessed letter is in puzzle
 *  - If yes
 *    - display message
 *    - check if won
 *      - if yes, display message, display completed puzzle and end game
 *      - if no, update and display puzzle
 *  - If no
 *    - display message
 *    - update strikes
 *    - check if lost
 *       - if yes, display message and end game
 *          - Don't display full puzzle
 *       - if no, display puzzle
 */

/**
 * Create help command
 * - Display instructions
 */
