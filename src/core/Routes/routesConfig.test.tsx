import {
    getDiscoverPath,
    getHomePath,
    getProjectPath,
    getNeighboursPath,
    getSimilarityPath,
    getDemountSequencePath,
} from 'src/core/Routes/routesConfig';

describe('routesConfig', () => {
    describe('getDiscoverPath', () => {
        it('generates the correct path', () => {
            expect(getDiscoverPath('123')).toEqual('/discover/123');
        });
    });

    describe('getHomePath', () => {
        it('generates the correct path', () => {
            expect(getHomePath()).toEqual('/');
        });
    });

    describe('getProjectPath', () => {
        it('generates the correct path', () => {
            expect(getProjectPath('123')).toEqual('/projects/123');
        });
    });

    describe('getNeighboursPath', () => {
        it('generates the correct path', () => {
            expect(getNeighboursPath('PROJECT_ID', 'PART_ID')).toEqual('/projects/PROJECT_ID/neighbours/PART_ID');
        });
    });

    describe('getSimilarityPath', () => {
        it('generates the correct path', () => {
            expect(getSimilarityPath('PROJECT_ID', 'PART_ID')).toEqual('/projects/PROJECT_ID/similarity/PART_ID');
        });
    });

    describe('getDemountSequencePath', () => {
        it('generates the correct path', () => {
            expect(getDemountSequencePath('PROJECT_ID')).toEqual('/projects/PROJECT_ID/demount-sequence');
            expect(getDemountSequencePath('PROJECT_ID', 'SEQUENCE_ID')).toEqual(
                '/projects/PROJECT_ID/demount-sequence/SEQUENCE_ID'
            );
        });
    });
});
