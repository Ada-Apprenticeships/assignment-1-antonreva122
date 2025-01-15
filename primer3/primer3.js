function createLinkedList(posts) {
  // Return null if the input is not an array or if it's an empty array
  if (!Array.isArray(posts) || posts.length === 0) {
    return null;
  }

  // Validate each post in the array
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if (!post.text || typeof post.text !== "string" || post.text.trim() === "" ||
        !post.timestamp || !(post.timestamp instanceof Date || !isNaN(new Date(post.timestamp))) ||
        !post.author || typeof post.author !== "string" || post.author.trim() === "") {
      throw new Error("Invalid post structure");
    }
  }

  // Create the head of the linked list
  const head = { data: posts[0], next: null };
  let current = head;

  // Link the rest of the posts
  for (let i = 1; i < posts.length; i++) {
    current.next = { data: posts[i], next: null };
    current = current.next;
  }

  return head; // Return the head of the linked list
}

// Function to search for posts containing a keyword or phrase
function searchSocialMediaFeed(feed, keyword) {
  if (!feed) return []; // Return an empty array if the feed is null

  const results = [];
  const normalizedKeyword = keyword.toLowerCase();
  const keywordWords = normalizedKeyword.split(/\s+/);

  let current = feed; // Start from the head of the linked list
  while (current) {
    const normalizedText = current.data.text.toLowerCase();
    const textWords = normalizedText.split(/\s+/);

    // Check for matches of the keyword in the post text
    const hasMatch = keywordWords.some(keyWord =>
      textWords.some(textWord => textWord.includes(keyWord))
    );

    if (hasMatch) {
      results.push(current.data); // Add the matching post to results
    }

    current = current.next; // Move to the next node
  }

  return results; // Return the array of matching posts
}



export {createLinkedList, searchSocialMediaFeed};
