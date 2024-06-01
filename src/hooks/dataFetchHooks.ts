import axios from "axios";
import { useState, useEffect } from "react";

export interface Review {
  profile_photo: string;
  username: string;
  stars: string;
  comment: string;
  comment_time: string;
}

export interface Reviews {
  stars: string;
  reviews: Review[];
}

export interface Order {
  [key: string]: number;
}

export interface Path {
  id: string;
  d: string;
}

const useFetchMapPaths = (): { pathsData: Path[] | undefined; isLoadingPaths: boolean; errorPaths: string | null } => {
  const [pathsData, setPathsData] = useState<Path[] | undefined>(undefined);
  const [isLoadingPaths, setIsLoadingPaths] = useState<boolean>(false);
  const [errorPaths, setErrorPaths] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoadingPaths(true);
      try {
        const response = await axios.get<Path[]>("data/map-paths.json");

        if (response.status !== 200) {
          throw new Error("Failed to fetch reviews");
        }
        setPathsData(response.data);
      } catch (error) {
        setErrorPaths("error");
      } finally {
        setIsLoadingPaths(false);
      }
    })();
  }, []);

  return { pathsData, isLoadingPaths, errorPaths };
};

const useFetchOrders = (): { ordersData: Order | undefined; isLoadingOrders: boolean; errorOrders: string | null } => {
  const [ordersData, setOrdersData] = useState<Order | undefined>(undefined);
  const [isLoadingOrders, setIsLoadingOrders] = useState<boolean>(false);
  const [errorOrders, setErrorOrders] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoadingOrders(true);
      try {
        const response = await axios.get<Order>("data/orders.json");

        if (response.status !== 200) {
          throw new Error("Failed to fetch reviews");
        }

        setOrdersData(response.data);
      } catch (error) {
        setErrorOrders("error");
      } finally {
        setIsLoadingOrders(false);
      }
    })();
  }, []);

  return { ordersData, isLoadingOrders, errorOrders };
};

const useFetchReviews = (): { reviewsData: Reviews | undefined; isLoadingReviews: boolean; errorReviews: string | null } => {
  const [reviewsData, setReviewsData] = useState<Reviews | undefined>(undefined);
  const [isLoadingReviews, setIsLoadingReviews] = useState<boolean>(false);
  const [errorReviews, setErrorReviews] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingReviews(true);
      try {
        const response = await axios.get<Reviews>("data/reviews.json");

        if (response.status !== 200) {
          throw new Error("Failed to fetch reviews");
        }

        const data = response.data;
        setReviewsData({
          stars: data.stars,
          reviews: randomComponents(data.reviews),
        } as Reviews);
      } catch (error) {
        setErrorReviews("error");
      } finally {
        setIsLoadingReviews(false);
      }
    };

    const randomComponents = (reviewsData: Review[]) => {
      const reviews: Review[] = [];
      for (let i = 0; i < 100; i++) {
        const randomIndex = Math.floor(Math.random() * reviewsData.length);
        const element = reviewsData[randomIndex];
        if (reviews.length >= 16) break;
        if (!reviews.includes(element)) reviews.push(element);
      }
      return reviews;
    };

    fetchData();
  }, []);

  return { reviewsData, isLoadingReviews, errorReviews };
};

export { useFetchMapPaths, useFetchOrders, useFetchReviews };
