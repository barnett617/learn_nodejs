// const dns = require('dns');

// dns.lookup('iana.org', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family);
// });

// address: "192.0.43.8" family: IPv4


const dns = require('dns');

/**
 * that resolves 'archive.org' then reverse resolves the IP addresses that are returned.
 */
dns.resolve4('archive.org', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});

// addresses: ["207.241.224.2"]
// reverse for 207.241.224.2: ["www.archive.org"]