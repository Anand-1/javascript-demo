/*
String Methods:
let str = "This is Anand"
1. str.length // returns length
2. str.slice(start,end) 
 - extracts a part of string and returns extracted part in a new string
 - takes 2 parameters: the start position, and the end position (end not included)
 - if second parameter is ommitted , it will extract to end
 - If negative parameter, it will count from end(both -ve needed)
3. str.substring(start,end) is similar to slice().
   -The difference is that substring() cannot accept negative indexes. 
4. str.substr(start,length)

5. str.replace(old,new) //only first match
6. let text3 = text1.concat(" ", text2);
7. str.trim() 
   - It removes whitespace from both sides of a string:

8. ECMAScript 2017 added two String methods: padStart and padEnd
   -str.padStart(no pad in start, value padded)
   -str.padEnd(no pad in end, value padded)
9. charAt(position)
10.charCodeAt(position)

11. A string can be converted to an array with the split() method:
   text.split(",")    // Split on commas
   text.split(" ")    // Split on spaces
   text.split("|")    // Split on pipe
   If the separator is omitted, the returned array will contain the whole string in index [0].
   If the separator is "", the returned array will be an array of single characters:
  
12. JavaScript methods for searching strings:
    String.indexOf()
    String.lastIndexOf()
    String.startsWith()
    String.endsWith()

13. String.match()
    The match() method searches a string for a match against a regular expression, and returns     the matches, as an Array object.

14. String.includes()
    The includes() method returns true if a string contains a specified value.
*/