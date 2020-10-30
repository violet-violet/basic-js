
 Input is: --double-next,0,--double-prev
 Output is: 0,0,0
 
  Input is: --discard-prev,true,--discard-next,Infinity,1.233,--discard-next
 Output is: true,1.233
 
  Input is: --double-next,GHI,--discard-prev,DEF,--discard-prev,0,[object Object],NaN,--discard-next
 Output is: GHI,0,[object Object],NaN


 1) Transform array
 functional requirements
   control sequences work properly:

AssertionError: expected [ Array(5) ] to deeply equal [ 'GHI', 0, { John: 'Smith' }, NaN ]
+ expected - actual

 [
   "GHI"
-  "DEF"
   0
   {
     "John": "Smith"
   }


/////////////////////////////////////////////////
Input is: --double-next,[object Object],--double-next
Output is: [object Object],[object Object]


[
  {
    "John": "Smith"
  }
+  {
+    "John": "Smith"
+  }
]

/////////////////////////////////////////////////
Input is: --double-prev,[object Object],--discard-next
Output is: [object Object]

 Input is: --double-next,ABC,--discard-next,false,DEF,--double-next
Output is: ABC,ABC,DEF

1) Transform array
       functional requirements
         control sequences work properly:

      AssertionError: expected [ 'ABC', false, 'DEF' ] to deeply equal [ 'ABC', 'ABC', 'DEF' ]
      + expected - actual

       [
         "ABC"
      -  false
      +  "ABC"
         "DEF"
       ]

/////////////////////////////////////////////////
Input is: --double-next,3.14,--discard-prev
Output is: 3.14

 Input is: --double-prev,[object Object],--discard-prev,GHI,0,--double-prev
Output is: GHI,0,0

1) Transform array
       functional requirements
         control sequences work properly:

      AssertionError: expected [ Array(4) ] to deeply equal [ 'GHI', 0, 0 ]
      + expected - actual

       [
      -  {
      -    "0": "first"
      -    "1": "second"
      -    "length": 2
      -  }
         "GHI"
         0
         0
       ]

/////////////////////////////////////////////////


/////////////////////////////////////////////////

