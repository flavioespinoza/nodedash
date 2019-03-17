# Test Node Typescript

### Test Driven Node v10 Typescript Web App

[docs](https://flavioespinoza.github.io/flodash/doc/node.html)

# <a href="https://github.com/flavioespinoza/nodedash">nodedash</a> <span>v1.0.0</span>

<!-- div class="toc-container" -->

<!-- div class="import" -->

## `Import`
* <a href="#_n-_n_import">`_n._n_import`</a>
* <a href="#_n-_n_modules">`_n._n_modules`</a>

<!-- /div -->

<!-- div class="import" -->

## `Require`
* <a href="#_n-require">`_n.require`</a>

<!-- /div -->

<!-- div class="import" -->

## `Date`
* <a href="#_n-date">`_n.date`</a>
* <a href="#_n-now">`_n.now`</a>
* <a href="#_n-getTimestamp">`_n.getTimestamp`</a>
* <a href="#_n-isDate">`_n.isDate`</a>

<!-- /div -->

<!-- div class="import" -->

## `Math`
* <a href="#_n-addDays">`_n.addDays`</a>
* <a href="#_n-subtractDays">`_n.subtractDays`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Import`

<!-- div -->

<h3 id="_n-_n_import"><code>_n._n_import</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Import using `esm` or `TypeScript`

#### Since
1.0.0

#### Example
```js
import _n from 'nodedash'

_n.date('3/14/2019', 'uk')
// => 14 Mar 2019

_n.addDays('3/6/19', 1, '-')
// => 03-07-2019

_n.subtractDays('3/6/19', 1, '-')
// => 03-05-2019
```
---

<!-- /div -->

<!-- div -->

<h3 id="_n-_n_modules"><code>_n._n_modules</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Import individual ES Modules using `esm` or `TypeScript`

#### Since
1.0.0

#### Example
```js
import { addDate, subtractDate } from 'nodedash'

addDays('3/6/19', 1, '-')
// => 03-07-2019

subtractDays('3/6/19', 1, '-')
// => 03-05-2019
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Require`

<!-- div -->

<h3 id="_n-require"><code>_n.require</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Import using `require`

#### Since
1.0.0

#### Example
```js
const _n = require('nodedash')

_n.date('3/14/2019', 'uk')
// => 14 Mar 2019

_n.addDays('3/6/19', 1, '-')
// => 03-07-2019

_n.subtractDays('3/6/19', 1, '-')
// => 03-05-2019
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Date” Methods`

<!-- div -->

<h3 id="_n-date"><code>_n.date(Date, format)</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Computes input `date` converts to string and returns with specified `format`.

#### Since
1.0.0

#### Arguments
1. `Date` *(date)*: options are `new Date()`, `timestamp` or `string` in valid date format. See example below.
2. `format` *(string)*:

#### Returns
*(string)*: Returns the date as a String in specified format.

#### Example
```js
let any_nate = "1/07/2019"

_n.date(any_nate, '/')
// => 01/07/2019

_n.date(any_nate, '-')
// => 01-07-2019

_n.date(any_nate, '.')
// => 01.07.2019

_n.date(any_nate, 'MMM DD YYYY')
// => Jan 07 2019

_n.date(any_nate, 'england')
// => 07 Jan 2019

_n.date(any_nate, 'uk')
// => 07 Jan 2019

_n.date(any_nate, 'full')
// => Mon Jan 07 2019 00:00:00 GMT-0700 (Mountain Standard Time)
```
---

<!-- /div -->

<!-- div -->

<h3 id="_n-now"><code>_n.now()</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Gets the timestamp of the number of milliseconds that have elapsed since
the Unix epoch *(1 January `1970 00`:00:00 UTC)*.

#### Since
1.0.0

#### Returns
*(number)*: Returns the timestamp.

#### Example
```js
const { defer } = require('lodash')

defer(function(stamp) {
  console.log(_n.now() - stamp)
}, _n.now())

// => Logs milliseconds it took for the deferred invocation.
```
---

<!-- /div -->

<!-- div -->

<h3 id="_n-getTimestamp"><code>_n.getTimestamp(Date)</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Gets the timestamp of the number of milliseconds that have elapsed since
`date` argument. If `date` is `undefined` it gives milliseconds elapsed since
the Unix epoch *(1 January `1970 00`:00:00 UTC)*.

#### Since
1.0.0

#### Arguments
1. `Date` *(date)*: to convert to timestamp.

#### Returns
*(number)*: Returns the timestamp.

#### Example
```js
_n.getTimestamp('July 4 1776')
// => 121244400000

_n.getTimestamp()
// => 1552353178563
// returns now timestamp

_n.getTimestamp('11/4/1973')
// => -6106035604000
```
---

<!-- /div -->

<!-- div -->

<h3 id="_n-isDate"><code>_n.isDate(value)</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Verifies if `value` is a valid `Date object` and valid `Date`.

#### Since
1.0.0

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: Returns `true` if `value` is a `Date object` & valid `Date`, else `false`.

#### Example
```js
_n.isDate('3/3/19')
// => true

_n.isDate(new Date())
// => true

_n.isDate('Jul 4 1776')
// => true

_n.isDate(25200000)
// => true

_n.isDate('3/33/19')
// => false

function getDate() {
    return '1/1/19'
}
_n.isDate(getDate)
// => false

_n.isDate(getDate())
// => true
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Math” Methods`

<!-- div -->

<h3 id="_n-addDays"><code>_n.addDays(Date, days, format)</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Input `_nate` add `nDays` with `format`

#### Since
1.0.0

#### Arguments
1. `Date` *(date)*:
2. `days` *(number)*: to add
3. `format` *(string)*:

#### Example
```js
const any_nate = '3/6/19'

_n.addDays(any_nate, 1, '-')
// => 03-07-2019

_n.addDays(any_nate, 2, '.')
// => 03.08.2019

_n.addDays(any_nate, 3, 'uk')
// => 09 Mar 2019
```
---

<!-- /div -->

<!-- div -->

<h3 id="_n-subtractDays"><code>_n.subtractDays(Date, days, format)</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Input `_nate` subtract `nDays` with `format`

#### Since
1.0.0

#### Arguments
1. `Date` *(Date)*:
2. `days` *(number)*: to subtract
3. `format` *(string)*:

#### Example
```js
const any_nate = '3/6/19'

_n.subtractDays(any_nate, 1, '-')
// => 03-05-2019

_n.subtractDays(any_nate, 2, '.')
// => 03.04.2019

_n.subtractDays(any_nate, 3, 'uk')
// => 03 Mar 2019
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
