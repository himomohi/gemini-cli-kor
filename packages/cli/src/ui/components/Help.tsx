/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Box, Text } from 'ink';
import { Colors } from '../colors.js';
import { SlashCommand } from '../hooks/slashCommandProcessor.js';

interface Help {
  commands: SlashCommand[];
}

export const Help: React.FC<Help> = ({ commands }) => (
  <Box
    flexDirection="column"
    marginBottom={1}
    borderColor={Colors.Gray}
    borderStyle="round"
    padding={1}
  >
    {/* Basics */}
    <Text bold color={Colors.Foreground}>
      기본 사용법:
    </Text>
    <Text color={Colors.Foreground}>
      <Text bold color={Colors.AccentPurple}>컨텍스트 추가</Text>: {' '}
      <Text bold color={Colors.AccentPurple}>@</Text>{' '}를 사용해 특정 파일이나
      폴더(<Text bold color={Colors.AccentPurple}>@src/myFile.ts</Text> 등)를 지정합니다.
    </Text>
    <Text color={Colors.Foreground}>
      <Text bold color={Colors.AccentPurple}>셸 모드</Text>: {' '}
      <Text bold color={Colors.AccentPurple}>!</Text>를 사용해 셸 명령을 실행하거나
      (<Text bold color={Colors.AccentPurple}>!npm run start</Text> 등) 자연어로
      요청할 수 있습니다(<Text bold color={Colors.AccentPurple}>start server</Text> 등).
    </Text>

    <Box height={1} />

    {/* Commands */}
    <Text bold color={Colors.Foreground}>
      명령어:
    </Text>
    {commands
      .filter((command) => command.description)
      .map((command: SlashCommand) => (
        <Text key={command.name} color={Colors.Foreground}>
          <Text bold color={Colors.AccentPurple}>
            {' '}
            /{command.name}
          </Text>
          {command.description && ' - ' + command.description}
        </Text>
      ))}
    <Text color={Colors.Foreground}>
      <Text bold color={Colors.AccentPurple}>
        {' '}
        !{' '}
      </Text>
      - 셸 명령
    </Text>

    <Box height={1} />

    {/* Shortcuts */}
    <Text bold color={Colors.Foreground}>
      단축키:
    </Text>
    <Text color={Colors.Foreground}>
      <Text bold color={Colors.AccentPurple}>Enter</Text> - 메시지 전송
    </Text>
    <Text color={Colors.Foreground}>
      <Text bold color={Colors.AccentPurple}>
        {process.platform === 'win32' ? 'Ctrl+Enter' : 'Ctrl+J'}
      </Text>{' '}
      {process.platform === 'linux'
        ? '- 새 줄 (일부 리눅스 배포판에서는 Alt+Enter 사용)'
        : '- 새 줄'}
    </Text>
    <Text color={Colors.Foreground}>
      <Text bold color={Colors.AccentPurple}>Up/Down</Text> - 입력 기록 탐색
    </Text>
    <Text color={Colors.Foreground}>
      <Text bold color={Colors.AccentPurple}>Alt+Left/Right</Text> - 입력 단어 단위 이동
    </Text>
    <Text color={Colors.Foreground}>
      <Text bold color={Colors.AccentPurple}>Shift+Tab</Text> - 수정 자동 수락 토글
    </Text>
    <Text color={Colors.Foreground}>
      <Text bold color={Colors.AccentPurple}>Esc</Text> - 작업 취소
    </Text>
    <Text color={Colors.Foreground}>
      <Text bold color={Colors.AccentPurple}>Ctrl+C</Text> - 프로그램 종료
    </Text>
  </Box>
);
