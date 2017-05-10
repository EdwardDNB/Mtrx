<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#org58b86fb">1. Installation</a></li>
<li><a href="#orgadc5144">2. Usage</a>
<ul>
<li><a href="#orgf3d22a7">2.1. creation</a></li>
<li><a href="#org3d30943">2.2. operation</a></li>
<li><a href="#orge3ce325">2.3. properties</a></li>
<li><a href="#org2a8f58d">2.4. static function</a></li>
<li><a href="#orge8f1f6c">2.5. methods</a></li>
</ul>
</li>
</ul>
</div>
</div>
Mtrx is a Array-like matrix calculation library.

default class Mtrx is extends Array.


<a id="org58b86fb"></a>

# Installation

``` shell
    $ npm install mtrx
```


<a id="orgadc5144"></a>

# Usage

``` javascript
    const Mtrx = require('mtrx');
```

<a id="orgf3d22a7"></a>

## creation

It is really easy to create a matrix object what you want.
``` javascript
    // No arguments, create a 1��1 random(0 ~ 1) matrix
    new Mtrx()
    // -> Mtrx [ [ 0.7173410249746024 ] ]
    
    new Mtrx(2)
    // -> Mtrx [
    //  [ 0.9028933497295337, 0.18980748816858917 ],
    //  [ 0.10859200880292263, 0.560035422729191 ] ]
    
    new Mtrx(2, 3)
    // -> Mtrx [
    //  [ 0.6974184450003136, 0.6402339494410889, 0.4553998131618524 ],
    //  [ 0.38759912033793165, 0.8904429716538196, 0.7449091649551736 ] ]
    
    new Mtrx(3, 4, 9)
    // -> Mtrx [ [ 9, 9, 9, 9 ], [ 9, 9, 9, 9 ], [ 9, 9, 9, 9 ] ]
    
    // Get numbers array, create a diag matrix
    new Mtrx([2, 4, 6])
    // -> Mtrx [ [ 2, 0, 0 ], [ 0, 4, 0 ], [ 0, 0, 6 ] ]
    
    // Get a 2-order numbers array, create a matrix like the array
    new Mtrx([[1, 2, 3], [4, 5, 6]])
    // -> Mtrx [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
    
    // Get a function expression, create a matrix by the expression
    new Mtrx(2, 3, (i, j) => i + j)
    // -> Mtrx [ [ 0, 1, 2 ], [ 1, 2, 3 ] ]
```

<a id="org3d30943"></a>

## operation

Mtrx object is a Array-like object. So, you can operat it just like to operat a 2-order Array.
``` javascript
    const m = new Mtrx(2, 3, 0)
    // -> Mtrx [ [ 0, 0, 0 ], [ 0, 0, 0 ] ]
    
    m[1][1]     // or     m.get(1, 1)
    // -> 0
    
    m[0][1] = 1     //or     m.set(0, 1, 1)
    // -> Mtrx [ [ 0, 1, 0 ], [ 0, 0, 0 ] ]
```

<a id="orge3ce325"></a>

## properties
``` javascript
    const m = new Mtrx(2, 3, (i, j) => (i === j) ? 1 : 0)
    // -> Mtrx [ [ 1, 0, 0 ], [ 0, 1, 0 ] ]
    const n = new Mtrx([
      [1, 2, 0],
      [3, 4, 4],
      [5, 6, 3]
    ])
    
    m.rows  // -> 2
    m.cols  // -> 3
    
    n.det  // -> 10
    m.det  // -> NaN
    // If the Mtrx object's rows and cols was not equal, det would be NaN
    
    m.rank  // -> 2     
    m[0][0] = 0
    // -> Mtrx [ [ 0, 0, 0 ], [ 0, 1, 0 ] ]
    m.rank  // -> 1
```

<a id="org2a8f58d"></a>

## static function

all the static functions is Immutable.
``` javascript
    Mtrx.zeros(3, 3)
    // -> Mtrx [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
    
    Mtrx.ones(3, 4)
    // -> Mtrx [ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ]
    
    Mtrx.eye(3)
    // -> Mtrx [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1] ]
    
    Mtrx.diag([2, 4, 6])
    // -> Mtrx [ [ 2, 0, 0 ], [ 0, 4, 0 ], [ 0, 0, 6 ] ]

    const n = [[0, 1, 2], [1, 2, 3]]
    const m = new Mtrx(n)
    // -> Mtrx [ [ 0, 1, 2 ], [ 1, 2, 3 ] ]
    
    Mtrx.isMtrx(n)     // -> false
    Mtrx.isMtrx(m)     // -> true
    
    Mtrx.isMtrxLike(n)     // -> true
    Mtrx.isDiag(m)     // -> false
    Mtrx.isSameShape(m, n)     // -> true

    const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
    const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    
    Mtrx.add(m, n)
    // -> Mtrx [ [ 2, 2, 3 ], [ 4, 6, 6 ], [ 7, 8, 10 ] ]
    
    Mtrx.mul(m, 3)
    // -> Mtrx [ [ 3, 0, 0 ], [ 0, 3, 0 ], [ 0, 0, 3 ] ]
    
    Mtrx.mul(m, n)
    // -> Mtrx [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
    
    Mtrx.div(n, m)
    // -> Mtrx [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
```

<a id="orge8f1f6c"></a>

## methods

Following functions will always return a new Mtrx object.
``` javascript
    const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
    const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    
    m.add(n)   // like Mtrx.add(m, n)
    
    m.leftMul(n)   // like Mtrx.mul(m, n)
    m.rightMul(n)   // like Mtrx.mul(n, m)
    
    n.cof(1, 1)
    // -> Mtrx [ [ 1, 3 ], [ 7, 9 ] ]
    
    // a powerful function
    m.mapMtrx((i, j, n) => i + j + n);
    // -> Mtrx [ [ 1, 1, 2 ], [ 1, 3, 3 ], [ 2, 3, 5 ] ]

    const m = new Mtrx(2, 3, (i, j) => (i === j) ? 1 : 0)
    // -> Mtrx [ [ 1, 0, 0 ], [ 0, 1, 0 ] ]
    const n = new Mtrx([
      [1, 2, 0],
      [3, 4, 4],
      [5, 6, 3]
    ])
    
    n.T()
    
    n.LUP()
    // -> { L: Mtrx [ [ 1, 0, 0 ], [ 0.2, 1, 0 ], [ 0.6, 0.5, 1 ] ],
    //      U: Mtrx [ [ 5, 6, 3 ], [ 0, 0.8, -0.6 ], [ 0, 0, 2.5 ] ],
    //      P: Mtrx [ [ 0, 0, 1 ], [ 1, 0, 0 ], [ 0, 1, 0 ] ] }
    n.LUP().L
    // -> Mtrx [ [ 1, 0, 0 ], [ 0.2, 1, 0 ], [ 0.6, 0.5, 1 ] ]
    
    n.inv()
    // -> Mtrx [ [ -1.2, -0.6, 0.8 ], [ 1.1, 0.3, -0.4 ], [ -0.2, 0.4, -0.2 ] ]
    
    // If there is no corresponding matrix, you would get a Error.
    m.LUP()
    m.inv()
    m.compan()
    // -> Error: ...
``` 
