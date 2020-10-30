1) Transform array
functional requirements
  control sequences work properly:

AssertionError: expected [ Array(4) ] to deeply equal [ 22, 22, 'ABC' ]
+ expected - actual

[
-  {
-    "0": "first"
-    "1": "second"
-    "length": 2
-  }
  22
  22
  "ABC"
]

----------------------------------------

1) Transform array
       functional requirements
         control sequences work properly:

      AssertionError: expected [ true ] to deeply equal [ true, true ]
      + expected - actual

       [
         true
      +  true
       ]


----------------------------------------
 1) Transform array
       functional requirements
         control sequences work properly:

      AssertionError: expected [ true, false, false ] to deeply equal [ true, true, false, false ]
      + expected - actual

       [
         true
      +  true
         false
         false
       ]
----------------------------------------
AssertionError: expected [ 'DEF', '8.963', false ] to deeply equal [ 'DEF', 'DEF', '8.963', false ]
      + expected - actual

       [
         "DEF"
      +  "DEF"
         "8.963"
         false
       ]

----------------------------------------
AssertionError: expected [ 'DEF', 0 ] to deeply equal [ 'DEF', 'DEF', 0 ]
+ expected - actual

 [
   "DEF"
+  "DEF"
   0
 ]


----------------------------------------



----------------------------------------
