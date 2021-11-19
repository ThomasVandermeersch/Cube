cube(`AssettypesCrate`, {
  sql: `SELECT * FROM doc.assettypes_crate`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    parent: {
      sql: `parent`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
