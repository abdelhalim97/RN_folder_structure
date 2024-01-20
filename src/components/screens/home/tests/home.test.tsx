import nock from 'nock';
import Home from '../home';
import {screen, render} from '@testing-library/react-native';
import Config from 'react-native-config';
import ReactQueryWrapper from '../../../../react-query/query-client-provider';

const responseCates = [
  {
    breeds: [],
    categories: [
      {
        id: 4,
        name: 'sunglasses',
      },
    ],
    id: 'bp',
    url: 'https://cdn2.thecatapi.com/images/bp.jpg',
    width: 500,
    height: 375,
  },
];

describe('tseting home screen', () => {
  it('testing Get endpoint failing', async () => {
    const response = [
      {
        id: 587093,
        image_id: '2bbSbBC-v',
        sub_id: 'demo-474a90',
        created_at: '2022-07-31T09:11:45.000Z',
        value: 1,
        country_code: 'JP',
        image: {
          id: '2bbSbBC-v',
          url: 'https://cdn2.thecatapi.com/images/2bbSbBC-v.jpg',
        },
      },
    ];

    nock(`${Config.CAT_API_URL}`)
      .get('/votes?limit=10&order=DESC')
      .reply(500, response);

    render(
      <ReactQueryWrapper>
        <Home />
      </ReactQueryWrapper>,
    );

    expect(screen.findByRole('text', {name: /home/i}));

    //this to solve problem when the jest hangup coz of react query cacheTime
    // https://github.com/TanStack/query/issues/1847
    jest.useFakeTimers();
  });

  it.only('testing success Get endpoint', async () => {
    render(
      <ReactQueryWrapper>
        <Home />
      </ReactQueryWrapper>,
    );

    nock(`${Config.CAT_API_URL}`)
      .get('images/search?limit=5')
      .reply(200, responseCates);

    expect(await screen.findByTestId('fetchedCats')).toBeOnTheScreen();
    //this to solve problem when the jest hangup coz of react query cacheTime
    // https://github.com/TanStack/query/issues/1847
    jest.useFakeTimers();
  });
});
