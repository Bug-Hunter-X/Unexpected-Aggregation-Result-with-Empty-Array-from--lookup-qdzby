# MongoDB Aggregation Pipeline Bug

This repository demonstrates a bug encountered when using MongoDB's aggregation pipeline with `$lookup`, `$unwind`, and `$group`. The bug specifically occurs when the `$lookup` operation returns an empty array for the `relatedDocs` field.

The issue is that the `$unwind` stage, when processing an empty array, will skip the entire document, causing data loss or unexpected aggregation results.

## Reproducing the Bug

1.  Clone this repository.
2.  Ensure you have MongoDB and a Node.js environment set up.
3.  Run `bug.js` to see the unexpected behavior.

## Solution

The solution involves using the `$ifNull` operator to gracefully handle the cases where the `relatedDocs` array is empty.  View `solution.js` for details.