import _ from 'lodash';

export const handler = async (event) => {
  const max = 99;
  const val = _.random(max);
  const response = {
    statusCode: 200,
    body: `The random value (max ${max}) is: ${val}`,
  };
  return response;
};