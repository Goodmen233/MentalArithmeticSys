package com.fiveonetwo.arithmetic.mapper;

import com.fiveonetwo.arithmetic.entity.Score;

import java.util.List;

public interface ScoreMapper {
    int insertScore(Score score);

    List<Score> selectScore(Score score);

    List<Score> getAvgScore();
}
