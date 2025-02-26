import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/FetchStatusSlice";
import { initialProducts } from "../store/productSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("https://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then(({ products }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(initialProducts(products));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus.fetchDone, dispatch]);
  return <div></div>;
};

export default FetchItems;
