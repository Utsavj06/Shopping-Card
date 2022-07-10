export const orderBilling = item => {
    return {
      type: 'SELECT_ITEM',
      payload: {
        id: item.id,
        data: { item: item },
      },
    };
  };