const trace_events = require('node:trace_events');
const t1 = trace_events.createTracing({ categories: ['node.fs_sync'] });
const t2 = trace_events.createTracing({ categories: ['node.perf'] });
const t3 = trace_events.createTracing({ categories: ['v8'] });

t1.enable();
t2.enable();

console.log(trace_events.getEnabledCategories());