import { test, expect } from '@playwright/test';

/*
Reasoning: This bug is critical because it prevents users from searching by book name.
*/
test('Bug 1: Search for Charlie and the Chocolate Factory book and check is displayed', async ({ page }) => {
  // Step 1: Navigate to the bookshelf page
  await page.goto('http://localhost:5173/');

  // Step 2: Perform the search 
  await page.fill('input.form-control', "Charlie and the Chocolate Factory");

  // Step 3: Verify that the book with href="/books/39" is displayed
  const bookExists = await page.isVisible('a[href="/books/39"]');
  expect(bookExists).toBe(true);  // Ensure the book is visible on the page
});

/*
Reasoning:
These pages should not be accessible since they do not exist and lead to an invalid state in the pagination system. 
This issue may confuse users and disrupt the navigation experience. 
The pagination should be restricted to valid, positive page numbers only.
*/
test('Bug 2: Back button should be disabled when user is on Page 1', async ({ page }) => {
  // Step 1: Navigate to the bookshelf page
  await page.goto('http://localhost:5173/');

  // Step 2: Ensure the user is on Page 1
  const pageNumber = await page.textContent('span[data-v-039dc986]');  // Verify page number
  expect(pageNumber).toBe('Page 1');  // Check that it's the first page

  // Step 3: Check if the left pagination button (back button) is disabled
  const isBackButtonDisabled = await page.isDisabled('button[data-v-039dc986] svg.bi-chevron-left');
  expect(isBackButtonDisabled).toBe(true);

});

/*
Why This Test is Worthwhile:
Core Functionality: Opening a book and viewing its details is one of the key features of the app.
Ensuring that users can view information about a book, including its rating, is crucial for a good user experience.
Verification: 
Verifying the rating ensures that the app is retrieving and displaying additional book information properly, which is a core expectation of a bookshelf app.
*/
test('Users can open the first book and view its title, author, and rating', async ({ page }) => {
  // Step 1: Navigate to the bookshelf page
  await page.goto('http://localhost:5173/');  // Adjust with your app URL

  // Step 2: Click on the first book element
  await page.click('a.book');  // Selects the first book link

  // Step 3: Verify that the book's detail page is displayed (URL should change to /books/13 or similar)
  const url = page.url();
  expect(url).toContain('/books/13');  // Adjust based on actual book ID

  // Step 4: Verify the book title is displayed
  const bookTitle = await page.textContent('h1');  // <h1> tag contains the title
  expect(bookTitle).toBe('The Outsiders');  // Expect the title to be "The Outsiders"

  // Step 5: Verify the author is displayed correctly
  const bookAuthor = await page.textContent('h2 em');  // <h2> tag contains the author inside <em>
  expect(bookAuthor).toBe('S.E. Hinton');  // Expect the author to be "S.E. Hinton"

  // Step 6: Verify the rating is displayed
  const bookRating = await page.textContent('div:has-text("User rating")');  // <div> containing the user rating
  expect(bookRating).toContain('4.12 / 5');  // Expect the rating to match (4.12 / 5)
});
