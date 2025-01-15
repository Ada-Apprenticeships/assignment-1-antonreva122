function createLinkedList(posts) {
  if (!Array.isArray(posts) || posts.length === 0) {
      return null; // Return null if input is not a valid array or is empty
  }

  let head = null; // Head of the linked list
  let tail = null; // Tail of the linked list

  for (const post of posts) {
      // Validate the structure of the post
      if (
          !post.text || 
          typeof post.text !== "string" || 
          post.text.trim() === "" ||
          !post.timestamp || 
          !(post.timestamp instanceof Date || !isNaN(new Date(post.timestamp))) ||
          !post.author || 
          typeof post.author !== "string" || 
          post.author.trim() === ""
      ) {
          throw new Error("Invalid post structure");
      }

      // Create a new node for the linked list
      const newNode = { 
          data: post, 
          next: null 
      };

      if (!head) {
          head = newNode; // Set the new node as the head if the list is empty
          tail = newNode; // Set the tail to the new node
      } else {
          tail.next = newNode; // Link the new node to the end of the list
          tail = newNode; // Update the tail to the new node
      }
  }

  return head; // Return the head of the linked list
}

// Function to search for posts containing a specific keyword or phrase
function searchSocialMediaFeed(feed, keyword) {
  if (!feed) return []; // Return an empty array if feed is null

  const results = [];
  const normalizedKeyword = keyword.toLowerCase(); // Normalize the keyword

  let current = feed; // Start from the head of the linked list
  while (current) {
      const normalizedText = current.data.text.toLowerCase(); // Normalize the post text
      if (normalizedText.includes(normalizedKeyword)) {
          results.push(current.data); // Add post to results if keyword is found
      }
      current = current.next; // Move to the next node
  }

  return results; // Return the array of matching posts
}

// const feed = createLinkedList([
//   { text: "Hello, world!", timestamp: new Date(), author: "Alice" },
//   { text: "How are you doing?", timestamp: new Date(), author: "Bob" },
//   { text: "Feeling great today!", timestamp: new Date(), author: "Charlie" }
// ]);

// const searchTerms = 'ing';
// const results = searchSocialMediaFeed(feed, searchTerms);

// console.log(results);


export default {createLinkedList, searchSocialMediaFeed};
