declare interface CodingPreferences {
  language: string[];
  codingStyle: string[];
  dataFormat: string[];
  errorHandling: string[];
  variableNaming: string[];
}

declare interface CodingFormProps {
  onPreferencesChange: (preferences: CodingPreferences) => void;
  className?: string;
}

declare interface ContentGenerationFormProps {
  onPreferencesChange: (preferences: ContentGenerationPreferences) => void;
  className?: string;
}

declare interface ContentGenerationPreferences {
  contentTypes: string[];
  writingStyle: string[];
  tone: string[];
  audience: string[];
  multimediaFormat: string[];
}
