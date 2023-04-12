import { Htag, Button } from "ui";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";
import styles from "./stores-map.module.sass";
import { YMaps } from "@pbe/react-yandex-maps";

type Geometry = {
  id: number;
  name: string;
  mapState: [number, number];
  placemark: [number, number];
  zoom: number;
};

const geometries: Geometry[] = [
  {
    id: 0,
    name: "п. Щеляюр",
    mapState: [65.325869, 53.417914],
    placemark: [65.325869, 53.417914],
    zoom: 10,
  },
  {
    id: 1,
    name: "д. Вертеп",
    mapState: [65.298894, 53.204025],
    placemark: [65.298894, 53.204025],
    zoom: 10,
  },
  {
    id: 2,
    name: "с. Краснобор",
    mapState: [65.294898, 53.285251],
    placemark: [65.294898, 53.285251],
    zoom: 10,
  },
  {
    id: 3,
    name: "д. Диюр",
    mapState: [65.277609, 53.359892],
    placemark: [65.277609, 53.359892],
    zoom: 10,
  },
];

interface StoresMapProps {
  className?: string;
}

export const StoresMap = ({ className }: StoresMapProps) => {
  const [geometry, setGeometry] = useState<Geometry>(geometries[0]);

  const handleSetgeometry = (geometryItem: Geometry) => {
    setGeometry(geometryItem);
  };

  return (
    <div className={className}>
      <Htag size="m" className={styles.title}>
        Наши магазины
      </Htag>
      <div className={styles.controls}>
        {geometries.map((el) => (
          <Button
            accent={geometry.id === el.id ? "secondary" : "grayscale"}
            decoration="default"
            size="s"
            onClick={() => {
              handleSetgeometry(el);
            }}
            key={el.id}
          >
            {el.name}
          </Button>
        ))}
      </div>
      <div className={styles.map}>
        <YMaps>
          <Map
            state={{ center: geometry.mapState, zoom: geometry.zoom }}
            defaultState={{ center: geometry.mapState, zoom: geometry.zoom }}
            className={styles.ymap}
          >
            <Placemark geometry={geometry.placemark} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
