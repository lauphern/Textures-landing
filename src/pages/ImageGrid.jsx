import React from "react";
import { Grid, GridList, GridListTile, Tooltip } from "@material-ui/core";

const ImageGrid = props => {
  return (
    <Grid item xs={12}>
      <GridList
        cellHeight={160}
        className={props.classes.gridList}
        cols={3}
        spacing={10}
      >
        {props.tiles.map(tile => (
          <Tooltip title={tile.credit} arrow>
            <GridListTile
              style={{
                gridColumn: tile.gridColumn || null,
                gridRow: tile.gridRow || null,
                width: "100% !important",
                height: "100% !important"
              }}
              key={tile.src}
              cols={tile.cols || 1}
              rows={tile.rows || 1}
            >
              <img src={tile.src} alt={tile.credit} />
            </GridListTile>
          </Tooltip>
        ))}
      </GridList>
    </Grid>
  );
};

export default ImageGrid;
