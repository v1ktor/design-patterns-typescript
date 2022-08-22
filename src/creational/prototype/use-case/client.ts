import { Document } from "./document";

const ORIGINAL_DOCUMENT = new Document('Original', [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
])
console.log(ORIGINAL_DOCUMENT)
console.log()

const DOCUMENT_COPY_1 = ORIGINAL_DOCUMENT.clone(1)
DOCUMENT_COPY_1.name = 'Shallow copy 1'
DOCUMENT_COPY_1.array[1][2] = 200
console.log(DOCUMENT_COPY_1)
console.log(ORIGINAL_DOCUMENT)
console.log()

const DOCUMENT_COPY_2 = ORIGINAL_DOCUMENT.clone(1)
DOCUMENT_COPY_2.name = 'Shallow copy 2'
DOCUMENT_COPY_2.array[1] = [9, 10, 11, 12]
console.log(DOCUMENT_COPY_2)
console.log(ORIGINAL_DOCUMENT)
console.log()

const DOCUMENT_COPY_3 = ORIGINAL_DOCUMENT.clone(2) // deep copy
DOCUMENT_COPY_3.name = 'Deep copy 3'
DOCUMENT_COPY_3.array[1][0] = 1234
console.log(DOCUMENT_COPY_3)
console.log(ORIGINAL_DOCUMENT)
console.log()
