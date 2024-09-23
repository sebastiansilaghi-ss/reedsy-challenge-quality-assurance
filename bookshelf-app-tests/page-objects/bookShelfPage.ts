import { Page } from '@playwright/test';

export class BookshelfPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(testEnvironment: string) {
        // Navigate to the bookshelf page
        await this.page.goto(testEnvironment);
    }


    async openBookByIndex(index: number) {
        // Open a book based on its position (index starts at 1 for the first book)
        const bookSelector = `a.book:nth-of-type(${index})`;
        await this.page.click(bookSelector);
    }

    async getBookTitle() {
        // Get the book title from the detail page
        return await this.page.textContent('h1');
    }

    async getBookAuthor() {
        // Get the book author from the detail page
        return await this.page.textContent('h2 em');
    }

    async getBookRating() {
        // Get the book rating from the detail page
        return await this.page.textContent('div:has-text("User rating")');
    }

    async searchBookByName(bookName: string) {
        // Locate the search input and type the book name
        await this.page.fill('input.form-control', bookName);
    }

    async sortBy(option: string) {
        // Sort the books by the given option (id, title, author, rating)
        await this.page.selectOption('select.form-select', option);
    }

}
