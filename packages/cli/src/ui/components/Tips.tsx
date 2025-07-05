/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Box, Text } from 'ink';
import { Colors } from '../colors.js';
import { type Config } from '@google/gemini-cli-core';

interface TipsProps {
  config: Config;
}

export const Tips: React.FC<TipsProps> = ({ config }) => {
  const geminiMdFileCount = config.getGeminiMdFileCount();
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Text color={Colors.Foreground}>시작을 위한 팁:</Text>
      <Text color={Colors.Foreground}>
        1. 질문을 하거나 파일을 수정하거나 명령을 실행하세요.
      </Text>
      <Text color={Colors.Foreground}>
        2. 구체적으로 요청할수록 더 좋은 결과를 얻을 수 있습니다.
      </Text>
      {geminiMdFileCount === 0 && (
        <Text color={Colors.Foreground}>
          3. {' '}
          <Text bold color={Colors.AccentPurple}>
            GEMINI.md
          </Text>{' '}
          파일을 만들어 Gemini와의 상호작용을 맞춤 설정하세요.
        </Text>
      )}
      <Text color={Colors.Foreground}>
        {geminiMdFileCount === 0 ? '4.' : '3.'}{' '}
        <Text bold color={Colors.AccentPurple}>
          /help
        </Text>{' '}
        로 더 많은 정보를 확인하세요.
      </Text>
    </Box>
  );
};
