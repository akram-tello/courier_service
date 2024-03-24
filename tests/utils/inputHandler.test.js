import { getBaseDeliveryCostAndPackages } from '../../src/utils/inputHandler.js';
import inquirer from 'inquirer';

jest.mock('inquirer');

describe('getBaseDeliveryCostAndPackages', () => {
  beforeEach(() => {
    inquirer.prompt.mockClear();
  });

  test('collects base delivery cost and package details', async () => {
    inquirer.prompt.mockResolvedValueOnce({ baseDeliveryCost: '100' })
                  .mockResolvedValueOnce({ noOfPackages: '1' })
                  .mockResolvedValueOnce({ id: 'PKG1', weight: '10', distance: '100', offerCode: 'OFR001' });

    const result = await getBaseDeliveryCostAndPackages();
    expect(result.baseDeliveryCost).toBe(100);
    expect(result.packages.length).toBe(1);
    expect(result.packages[0]).toEqual(['PKG1', '10', '100', 'OFR001']);
  });

});
