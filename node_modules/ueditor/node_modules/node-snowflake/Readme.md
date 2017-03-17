node-snowflake
==============

node-snowflake is a node.js clone for [twitter snowflake](https://github.com/twitter/snowflake).

###how to use
<code>
>//only run simple http server <br>
> require('node-snowflake').Server(3001);   <br><br>
>//request url example:GET http://localhost:3001/next_id?worker_id={optional}&data_center_id={optional}&sequence={optional} <br><br>
>//response : {"id":"439658373735124992"}
</code>

--------------------------
<code>
>//only run snowflake nextId<br>
>var snowflake = require('node-snowflake').Snowflake;<br>
>var id = snowflake.nextId(); // use default set<br>
>//or <br>
>//snowflake.init({worker_id : 1, data_center_id : 1, sequence : 0});<br>
>//var id = snowflake.nextId();<br>
>console.log(id);
</code>


###see examples/example.js