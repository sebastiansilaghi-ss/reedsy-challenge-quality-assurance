import { test, expect } from '@playwright/test';
import { BookshelfPage } from '../../page-objects/BookshelfPage'; 
import config from '../../config';

test('Users can open the first book and view its title, author, and rating', async ({ page }) => {
  // Initialize the page object
  const bookshelfPage = new BookshelfPage(page);

  // Step 1: Navigate to the bookshelf page
  await bookshelfPage.goto(config.testEnvironment);

  // Step 2: Open the first book by index
  await bookshelfPage.openBookByIndex(1);

  // Step 3: Verify the book title
  const bookTitle = await bookshelfPage.getBookTitle();
  expect(bookTitle).toBe('The Outsiders');  // Adjust expected title if needed

  // Step 4: Verify the book author
  const bookAuthor = await bookshelfPage.getBookAuthor();
  expect(bookAuthor).toBe('S.E. Hinton');  // Adjust expected author if needed

  // Step 5: Verify the book rating
  const bookRating = await bookshelfPage.getBookRating();
  expect(bookRating).toContain('4.12 / 5');  // Adjust expected rating if needed
});
