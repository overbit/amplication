import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MitsSlateRecommend2List = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MitsSlateRecommend2s"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="First" source="first" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Prefix" source="prefix" />
        <TextField label="Reference2 Email" source="reference2Email" />
        <TextField label="Reference2 First" source="reference2First" />
        <TextField label="Reference2 Industry" source="reference2Industry" />
        <TextField label="Reference2 Last" source="reference2Last" />
        <TextField
          label="Reference2 Organization"
          source="reference2Organization"
        />
        <TextField label="Reference2 Phone" source="reference2Phone" />
        <TextField label="Reference2 Submitted" source="reference2Submitted" />
        <TextField label="Reference2 Title" source="reference2Title" />
        <TextField label="Reference2 Type" source="reference2Type" />
        <TextField
          label="Reference Num2 Isrms Recommender Score1"
          source="referenceNum2IsrmsRecommenderScore1"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score10"
          source="referenceNum2IsrmsRecommenderScore10"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score11"
          source="referenceNum2IsrmsRecommenderScore11"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score12"
          source="referenceNum2IsrmsRecommenderScore12"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score13"
          source="referenceNum2IsrmsRecommenderScore13"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score14"
          source="referenceNum2IsrmsRecommenderScore14"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score15"
          source="referenceNum2IsrmsRecommenderScore15"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score2"
          source="referenceNum2IsrmsRecommenderScore2"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score3"
          source="referenceNum2IsrmsRecommenderScore3"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score4"
          source="referenceNum2IsrmsRecommenderScore4"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score5"
          source="referenceNum2IsrmsRecommenderScore5"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score6"
          source="referenceNum2IsrmsRecommenderScore6"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score7"
          source="referenceNum2IsrmsRecommenderScore7"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score8"
          source="referenceNum2IsrmsRecommenderScore8"
        />
        <TextField
          label="Reference Num2 Isrms Recommender Score9"
          source="referenceNum2IsrmsRecommenderScore9"
        />
        <TextField
          label="Reference Num2 Mse Recommendation Additional"
          source="referenceNum2MseRecommendationAdditional"
        />
        <TextField
          label="Reference Num2 Mse Recommendation Comparison"
          source="referenceNum2MseRecommendationComparison"
        />
        <TextField
          label="Reference Num2 Mse Recommendation How Known"
          source="referenceNum2MseRecommendationHowKnown"
        />
        <TextField
          label="Reference Num2 Mse Recommendation Project Performance"
          source="referenceNum2MseRecommendationProjectPerformance"
        />
        <TextField
          label="Reference Num2 Mse Recommendation Strengths Weakness"
          source="referenceNum2MseRecommendationStrengthsWeakness"
        />
        <TextField
          label="Reference Num2 Recommender Score1"
          source="referenceNum2RecommenderScore1"
        />
        <TextField
          label="Reference Num2 Recommender Score2"
          source="referenceNum2RecommenderScore2"
        />
        <TextField
          label="Reference Num2 Recommender Score3"
          source="referenceNum2RecommenderScore3"
        />
        <TextField
          label="Reference Num2 Recommender Score4"
          source="referenceNum2RecommenderScore4"
        />
        <TextField
          label="Reference Num2 Recommender Score5"
          source="referenceNum2RecommenderScore5"
        />
        <TextField
          label="Reference Num2 Recommender Score6"
          source="referenceNum2RecommenderScore6"
        />
        <TextField
          label="Reference Num2 Recommender Score7"
          source="referenceNum2RecommenderScore7"
        />
        <TextField
          label="Reference Num2 Recommender Score8"
          source="referenceNum2RecommenderScore8"
        />
      </Datagrid>
    </List>
  );
};
