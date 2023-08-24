export const discounts = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
};

export const cost = (books) => {
  const bookCost = 800;
  const numDiffBooks = [];
  let numBooks = 0;

  if (!books.length) return 0;
  if (books.length === 1) return bookCost;

  for (let i = 0; i < books.length; i++) {
    if (books[i] !== books[i - 1]) numDiffBooks.push(books[i]);
    else numBooks++;
  }

  const priceDiffBooks =
    numDiffBooks.length *
    (bookCost - bookCost * discounts[numDiffBooks.length]);
  console.log(numDiffBooks, priceDiffBooks);
  const priceSameBooks = numBooks * bookCost;
  return priceDiffBooks + priceSameBooks;
};
