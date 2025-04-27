import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Layout from '../layouts/Layout';
import SearchHeader from '../widgets/SearchHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  fetchItemsByCategories,
  fetchItemsWContext,
} from '../services/https/requests/items';
import {Item, Pagination} from '../redux/types/interface';
import Toast from 'react-native-simple-toast';
import PaginationView from '@cherry-soft/react-native-basic-pagination';

export const ProductListing = ({route}: any) => {
  const context = route.params?.context ?? '';

  const [search, setsearch] = useState<string>(context || '');
  const [initialSearchTriggered, setinitialSearchTriggered] =
    useState<boolean>(false);
  const isFiltered = useMemo(() => search.split(':').length > 1, [search]);

  const [products, setproducts] = useState<Item[]>([]);
  const [pagination, setpagination] = useState<Pagination>({
    total: 0,
    page: 0,
    limit: 10,
  });

  const submitSearch = useCallback(
    (request_page: number) => {
      if (search.trim() === '') {
        Toast.show('Search box is empty', Toast.LONG);
        return;
      }

      if (isFiltered) {
        fetchItemsByCategories(search.split(':')[1], request_page)
          .then(response => {
            const {total, limit, page} = response.data.meta;
            setpagination({total, limit, page});
            setproducts(response.data.items);
          })
          .catch(err => {
            console.log(err);
          });

        return;
      }

      fetchItemsWContext(search, request_page)
        .then(response => {
          const {total, limit, page} = response.data.meta;
          setpagination({total, limit, page});
          setproducts(response.data.items);
        })
        .catch(err => {
          console.log(err);
        });
    },
    [search, isFiltered],
  );

  useEffect(() => {
    if (context.trim() !== '') {
      if (!initialSearchTriggered) {
        submitSearch(1);
        setinitialSearchTriggered(true);
      }

      return;
    }

    Toast.show('Search box is empty', Toast.LONG);
  }, [context, submitSearch, initialSearchTriggered]);

  return (
    <Layout
      header={
        <SearchHeader
          value={search}
          showBackButton
          onEdit={e => {
            setsearch(e);
          }}
          onSubmit={() => {
            submitSearch(1);
          }}
        />
      }>
      <View style={styles.container}>
        {products.map((mp: Item, i: number) => {
          return (
            <View key={i} style={styles.item}>
              <Icon name="cart" size={50} color="#000" />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{mp.name}</Text>
                <Text style={styles.itemDesc}>{mp.description}</Text>
              </View>
              <Text style={styles.pricetext}>$ {mp.price}</Text>
            </View>
          );
        })}
      </View>
      <PaginationView
        totalItems={pagination.total}
        pageSize={pagination.limit}
        currentPage={pagination.page}
        onPageChange={e => {
          submitSearch(e);
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  item: {
    width: '100%',
    padding: 15,
    minHeight: 70,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10',
  },
  itemDetails: {
    flex: 1,
    height: '100%',
  },
  pricetext: {
    fontWeight: 'bold',
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemDesc: {
    fontSize: 14,
  },
});
